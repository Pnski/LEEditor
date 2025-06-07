# Dumping

For extraction of the sourcefiles i used the fellowing stuff

## il2cppdumper

Preparationwork for AssetStudio

Github: [Il2CppDumper](https://github.com/Perfare/Il2CppDumper)

```
Il2CppDumper.exe "GAMEROOTFOLDER\GameAssembly.dll" "GAMEROOTFOLDER\DATAFOLDER\il2cpp_data\Metadata\global-metadata.dat" .\output
```

## AssetStudio

Im using the CLI version, to extract all data and search for what i need, might narrow that down for the future. The GUI Version takes around 40gb of RAM with Last Epoch.

Github: [AssetStudioMod](https://github.com/aelurum/AssetStudio)

```
@echo off
setlocal

:: Select Input Folder
powershell -Command "Add-Type -AssemblyName System.Windows.Forms; $f = New-Object System.Windows.Forms.FolderBrowserDialog; $f.Description = 'Select Input Folder (Assets Folder)'; if ($f.ShowDialog() -eq 'OK') { Write-Output $f.SelectedPath }" > folder1.txt
set /p folder1=<folder1.txt
del folder1.txt

:: Select Assembly Folder
powershell -Command "Add-Type -AssemblyName System.Windows.Forms; $f = New-Object System.Windows.Forms.FolderBrowserDialog; $f.Description = 'Select Assembly Folder (DummyDll)';if ($f.ShowDialog() -eq 'OK') { Write-Output $f.SelectedPath }" > folder2.txt
set /p folder2=<folder2.txt
del folder2.txt

:: Select Output Folder
powershell -Command "Add-Type -AssemblyName System.Windows.Forms; $f = New-Object System.Windows.Forms.FolderBrowserDialog; $f.Description = 'Select Output Folder'; if ($f.ShowDialog() -eq 'OK') { Write-Output $f.SelectedPath }" > folder3.txt
set /p folder3=<folder3.txt
del folder3.txt

:: Run AssetStudioModCLI
echo Running: .\AssetStudioModCLI.exe "%folder1%" -t monobehaviour,sprite,tex2d,textasset -g type --assembly-folder "%folder2%" -o "%folder3%"
.\AssetStudioModCLI.exe "%folder1%" -t monobehaviour,sprite,tex2d,textasset -g type --assembly-folder "%folder2%" -o "%folder3%"

pause
```

## 最后纪元存档修改器V3.0.4

Chinese LastEpoch Archive Editor v3.0.4
Source: [caimogu.cc](https://www.caimogu.cc/post/285188.html)

> You can find the tool also via google drive, I don't know if thats a legal version.

This tool helped me alot understanding the structure of the rolls, since i could easily edit items to my need and view how rolls worked.