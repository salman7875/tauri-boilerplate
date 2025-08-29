# Kill any related processes
Write-Host "🔄 Killing leftover processes..."
taskkill /IM electron.exe /F /T > $null 2>&1
taskkill /IM tauri-boilerplate.exe /F /T > $null 2>&1
taskkill /IM node.exe /F /T > $null 2>&1

# Sleep for safety
Start-Sleep -Seconds 2

# Unlocker: rename before delete (breaks the lock)
function Remove-LockedFolder {
    param([string]$path)

    if (Test-Path $path) {
        $temp = "$path-to-delete-" + [guid]::NewGuid().ToString()
        try {
            Rename-Item -Path $path -NewName $temp -ErrorAction Stop
            Write-Host "🪓 Renamed locked folder → $temp"
            Start-Sleep -Seconds 1
            Remove-Item -Recurse -Force $temp
            Write-Host "✅ Successfully removed locked folder."
        } catch {
            Write-Host "❌ Could not force delete: $($_.Exception.Message)"
        }
    }
}

# Force clean dist-electron
Remove-LockedFolder "dist-electron"

# Run build
Write-Host "⚡ Starting build..."
npm run build
