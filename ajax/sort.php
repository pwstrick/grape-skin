<?php

$result = array(
	'msg' => '操作成功！',
	'result' => '1',
	'data' => array(
		'sort' => array(1,2,3,4,5,6,7,8,9,10),//重新排序后的数据
		'ids' => array(1,2,3,4,5,10,6,7,8,9)//排序对应的ID
	)
);

echo json_encode($result);
