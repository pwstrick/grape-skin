<?php
define ('ROOT_PATH', dirname(dirname(__FILE__)));//自定义
define ('DOMAIN', 'http://admin.huali.net/php/');//自定义
//define ('DOMAIN', 'http://hualihtml.emailcar.net/huali_admin/php/');//自定义

header('Access-Control-Allow-Origin: *');

require_once('upload.php');
//$fileId = $_POST['fileid'];

$action = isset($_GET['action']) ? $_GET['action'] : '';
$path = ROOT_PATH . '/scripts/libs/ueditor/php/config.json';
$CONFIG = json_decode(preg_replace("/\/\*[\s\S]+?\*\//", "", file_get_contents($path)), true);
switch ($action) {
    case 'config':
        echo  json_encode($CONFIG);
        break;
    default:
		//TODO 上传逻辑
        _ueditor('upfile');
        break;
}

function _ueditor($name) {
	$path = sprintf('%s/%s/%s/', date('Y'), date('m'), date('d'));

	$upload = new App_Util_Upload($name, 0);
	//获取上传信息
	$info = $upload->getUploadFileInfo();
	//var_dump($name);
	$fileName = time() . rand(1000, 9999) . '.' . $info['suffix'];
	$fullName = $path . $fileName;	
	$path = rtrim('upload', DIRECTORY_SEPARATOR) . '/' . $fullName;
	$success = $upload->save($path);
	
	echo json_encode(array('url' => DOMAIN.$path, 'state' => 'SUCCESS', 'imageid'=> rand(1,9999)));
}
