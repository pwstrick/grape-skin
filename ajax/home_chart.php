<?php
$result = array(
	'msg' => '获取成功！',
	'result' => '1',
	'data' => array(
		'user_num' => array(32,45,10,100),
		'order_num' => array(56,10,44,65),
		'date' => array('2015-1-1','2015-1-2','2015-1-3','2015-1-4')
	)
);
echo json_encode($result);