<?php
    $myfile = fopen("TextUtils.txt", "w");
    $txt = "krish patel";
    fwrite($myfile, $txt);
    fclose($myfile);
?>