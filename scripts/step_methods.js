$("#inner2").hide();

function startup_CFW(){
    $("#inner1").hide();
    $("#inner2").show();
    
    getLatestRelease("vgmoose","hbas",".zip","Homebrew App Store");
    extractZip("Homebrew App Store","wiiu","");
    
    getLatestRelease("FIX94","haxchi","CBHC","CBHC");
    extractZip("CBHC","","");

    getLatestRelease("FIX94","haxchi","Haxchi","Haxchi");
    extractZip("Haxchi","","");
    
    getFileBuffer_url("https://wiiu.guide/images/config.txt", "Config.txt");
    addFile("Config.txt","haxchi","config.txt","list");
    
    getLatestRelease("dimok789","homebrew_launcher","channel","Homebrew Launcher Channel");
    extractZip("Homebrew Launcher Channel","install","");
    
    notLatestRelease("dimok789","mocha",".zip","Mocha CFW");
    getFileBuffer_zip("Mocha CFW","mocha.elf","mocha.elf","wiiu/apps/mocha");
    
    getLatestRelease("Yardape8000","wupinstaller",".zip","WUP installer");
    extractZip("WUP installer","","");
    
    getLatestRelease("koolkdev","disc2app",".zip","disc2app");
    extractZip("disc2app","","");
    
    getFileBuffer_url("https://cors-anywhere.herokuapp.com/http://wiiubru.com/appstore/zips/wuphax.zip", "WUPhax");
    extractZip("WUPhax","","");
    
    getLatestRelease("Maschell","saviine",".zip","Saviine");
    extractZip("Saviine","","");
    
    //getFileBuffer_url("https://cors-anywhere.herokuapp.com/https://bootmii.org/get.php?file=hackmii_installer_v1.2.zip", "BootMii");
    //getFileBuffer_zip("BootMii","boot.elf","boot.elf","");
    
    getFileBuffer_url("https://wiiu.guide/images/vWii_cIOS_apps_20131218.zip", "vWii cIOS apps");
    extractZip("vWii cIOS apps","","");
    
    
   getFileBuffer_url("https://wiiu.guide/images/Patched_IOS80_Installer_for_vWii.zip","Patched IOS80 installer"); 
    extractFolder("Patched IOS80 installer","apps","");
}