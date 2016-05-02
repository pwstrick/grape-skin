<?php
/**
 * result 1:正常 0:失败 2:跳转 
 */
$result = array(
	array('label'=>'自动1', 'value'=>'自动1'),
	array('label'=>'自动2', 'value'=>'自动2'),
	array('label'=>'自动3', 'value'=>'自动3'),
	array('label'=>'自动4', 'value'=>'自动4')
);

echo json_encode($result);
