<?php
/**
 * result 1:正常 0:失败 2:跳转 
 */
$result = array(
	'msg' => '操作成功！',
	'result' => '1',
	'data' => array()//额外附加值
);

if(isset($_POST['tree_hidden'])) {
	$tree = $_POST['tree_hidden'];
	$result['data'] = array('ids'=>$tree, 'names'=>array('随机3', '随机二'));
}

echo json_encode($result);
