[CmdletBinding()]
param(
  [string]$CommitMessage = "Sync repository files"
)

$ErrorActionPreference = "Stop"

function Invoke-Git {
  param([Parameter(Mandatory)][string[]]$Arguments)

  & git @Arguments
  if ($LASTEXITCODE -ne 0) {
    throw "Git command failed: git $($Arguments -join ' ')"
  }
}

$repository = (& git rev-parse --show-toplevel).Trim()
if ($LASTEXITCODE -ne 0 -or -not $repository) {
  throw "Run this script from inside a Git repository."
}

Set-Location $repository

$branch = (& git branch --show-current).Trim()
if ($LASTEXITCODE -ne 0 -or -not $branch) {
  throw "The repository is not on a named branch."
}

$remote = (& git remote get-url origin 2>$null).Trim()
if ($LASTEXITCODE -ne 0 -or -not $remote) {
  throw "No GitHub remote named 'origin' is configured."
}

Write-Host "Tracking all files in $repository"
Invoke-Git -Arguments @("add", "--all")

& git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Host "No changes to sync."
  exit 0
}

Invoke-Git -Arguments @("commit", "-m", $CommitMessage)
Invoke-Git -Arguments @("push", "origin", $branch)

Write-Host "Synced branch '$branch' to $remote"