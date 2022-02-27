	
	<div class="goodsPage Page">
		<h1 class="goodsPageTitle Title">Товары</h1>
		<div class="goodsPageWrapper Wrapper">
			<?php 
				for ($row_no = 0; $row_no <= $data->num_rows - 1; $row_no++) {
					$data->data_seek($row_no);
					$row = $data->fetch_assoc();
					echo '
			<div class="goodsPageList">
					<img src="'.$row['src'].'" alt="coffee-shop" class="goodsPageImg">'.
					'<div class="goodsPageItem">
						<div class="goodsPageName">'.$row['product'].'</div>
						<a href="/coffee-shop/goods/?id='.$row['id'].'">Подробнее</a>
					</div>
				</div>';
				}
			?>
			
		</div>
	</div>