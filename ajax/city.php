<?php
$type = empty($_REQUEST['type']) ? '' : $_REQUEST['type'];
$value = empty($_REQUEST['value']) ? '' : $_REQUEST['value'];
if($type == "city") {
	if($value == 1) {
		$data = array(
			75 => '市辖区'
		);
	}else {
		$data = array(
			76 => '南京市',
			77 => '南通市'
		);
	}
	
}elseif($type == "district") {
	$data = array(
		790 => '虹口区',
		791 => '杨浦区',
		792 => '闵行区'
	);
}else {
	$data = array(
		1 => '上海',
		2 => '江苏'
	);
}

$result = array(
	'msg' => '操作成功！',
	'result' => '1',
	'data' => $data
);

echo json_encode($result);
