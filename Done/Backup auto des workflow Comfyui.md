normalement dans  [workflows](file:///I:%5CIA%5CStabilityMatrix%5CPackages%5CComfyUI%5Cuser%5Cdefault%5Cworkflows)

utiliser un lien junction comme le fait Stability Matrix 

cible : un repertoire backuppé automatiquement 
- [D:](file:///D:%5C) Backup de disque ATI 
dans [Stability Matrix Project](file:///D:%5Cdev-data%5CIA%5CStability%20Matrix%20Project)
-  [workflow](file:///D:%5Cdev-data%5CIA%5CStability%20Matrix%20Project%5Cworkflow) : pour y stocker les workflow sauvegardé explicitement
- workflow_auto: pour y stocker les workflow sauver sans exporter 

- [x] Verification que   [workflows](file:///I:%5CIA%5CStabilityMatrix%5CPackages%5CComfyUI%5Cuser%5Cdefault%5Cworkflows) est bien moidifié apres sauvegarde§ComfyUI quand on save le worflow en cours ✅ 2025-01-29
      
> [!multi-column||center-fixed]
> 
> ![[Pasted image 20250129195909-1.png|200]]
>
> ![[Pasted image 20250129195938-1.png]]
> 

✅
![[Pasted image 20250129212613-1.png]]



- [x] creation junction ✅ 2025-01-29

```powershell

`xcopy "I:\IA\StabilityMatrix\Packages\ComfyUI\user\default\workflows\*" "D:\dev-data\IA\Stability Matrix Project\workflow_auto\" /E /I`
rmdir  "I:\IA\StabilityMatrix\Packages\ComfyUI\user\default\workflows" /S /Q

mklink /J "I:\IA\StabilityMatrix\Packages\ComfyUI\user\default\workflows" "D:\dev-data\IA\Stability Matrix Project\workflow_auto"


```

Résultats

> [!multi-column]
> 
> ![[Pasted image 20250129213818-1.png]]
> 
> ![[Pasted image 20250129213835-1.png]]
> 
