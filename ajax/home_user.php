<?php
$p = (int)$_REQUEST['p'];
if($p <= 5) {
	$data = array(
		'list' => array(
			array(
				'email'=>'demo2@hua.li', 
				'create_time' => '1月26日 10:22',
				'log_count' =>'33', 
			),
			array(
				'email'=>'demo2@hua.li', 
				'create_time' => '1月26日 10:22',
				'log_count' =>'33', 
			)
		),
		'page' => array(
			'total' => 12322,
			'numbers' => array(1,2,3,4,5,6,7,8),
			'last' => 1,//当为0的时候就是不可点击
			'next' => 9,
			'current' => 5
		)
	);
}else {
	$data = array(
		'list' => array(
			array(
				'email'=>'demo2@hua.li1', 
				'create_time' => '1月26日 10:11',
				'log_count' =>'11', 
			),
			array(
				'email'=>'demo2@hua.li1', 
				'create_time' => '1月26日 10:11',
				'log_count' =>'11', 
			)
		),
		'page' => array(
			'total' => 12322,
			'numbers' => array(2,3,4,5,6,7,8,9),
			'last' => 1,//当为0的时候就是不可点击
			'next' => 9,
			'current' => 6
		)
	);
}
$result = array(
	'msg' => '获取成功！',
	'result' => '1',
	'data' => $data
);
echo json_encode($result);