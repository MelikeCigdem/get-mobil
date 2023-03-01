import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "../styles/ProductionList.module.scss";
import {Chip, Grid} from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


export default function MediaCard() {

    const new_card = [
	{
		id: 1,
		image: "/image/image.png",
		title: "Samsung",
		desc: "Grand Prime Plus",
		brand: "256 GB - Gold Rose White",
		price_title: "Başlangıç Fiyatı",
		price: "₺99.999",
		status : 0
	},
	{
		id: 2,
		image: "/image/image.png",
		title: "Samsung",
		desc: "Grand Prime Plus",
		brand: "256 GB - Gold Rose White",
		price_title: "Başlangıç Fiyatı",
		price: "₺99.999",
		status : 0
	},
	{
		id: 3,
		image: "/image/image.png",
		title: "Samsung",
		desc: "Grand Prime Plus",
		brand: "256 GB - Gold Rose White",
		price_title: "Başlangıç Fiyatı",
		price: "₺99.999",
		status : 1
	},
	{
		id: 4,
		image: "/image/image.png",
		title: "Samsung",
		desc: "Grand Prime Plus",
		brand: "256 GB - Gold Rose White",
		price_title: "Başlangıç Fiyatı",
		price: "₺99.999",
		status : 0
	},
	{
		id: 5,
		image: "/image/image.png",
		title: "Samsung",
		desc: "Grand Prime Plus",
		brand: "256 GB - Gold Rose White",
		price_title: "Başlangıç Fiyatı",
		price: "₺99.999",
		status : 0
	},
	{
		id: 6,
		image: "/image/image.png",
		title: "Samsung",
		desc: "Grand Prime Plus",
		brand: "256 GB - Gold Rose White",
		price_title: "Başlangıç Fiyatı",
		price: "₺99.999",
		status : 0
	}
];
	const new_card_two = [
		{
			id: 1,
			image: "/image/image.png",
			title: "Samsung",
			desc: "Grand Prime Plus",
			brand: "256 GB - Gold Rose White",
			price_title: "Başlangıç Fiyatı",
			price: "₺99.999",
			status : 1
		},
		{
			id: 2,
			image: "/image/image.png",
			title: "Samsung",
			desc: "Grand Prime Plus",
			brand: "256 GB - Gold Rose White",
			price_title: "Başlangıç Fiyatı",
			price: "₺99.999",
			status : 0
		},
		{
			id: 3,
			image: "/image/image.png",
			title: "Samsung",
			desc: "Grand Prime Plus",
			brand: "256 GB - Gold Rose White",
			price_title: "Başlangıç Fiyatı",
			price: "₺99.999",
			status : 0
		},
		{
			id: 4,
			image: "/image/image.png",
			title: "Samsung",
			desc: "Grand Prime Plus",
			brand: "256 GB - Gold Rose White",
			price_title: "Başlangıç Fiyatı",
			price: "₺99.999",
			status : 0
		},
		{
			id: 5,
			image: "/image/image.png",
			title: "Samsung",
			desc: "Grand Prime Plus",
			brand: "256 GB - Gold Rose White",
			price_title: "Başlangıç Fiyatı",
			price: "₺99.999",
			status : 1
		},
		{
			id: 6,
			image: "/image/image.png",
			title: "Samsung",
			desc: "Grand Prime Plus",
			brand: "256 GB - Gold Rose White",
			price_title: "Başlangıç Fiyatı",
			price: "₺99.999",
			status : 0
		},
		{
			id: 7,
			image: "/image/image.png",
			title: "Samsung",
			desc: "Grand Prime Plus",
			brand: "256 GB - Gold Rose White",
			price_title: "Başlangıç Fiyatı",
			price: "₺99.999",
			status : 0
		},
		{
			id: 8,
			image: "/image/image.png",
			title: "Samsung",
			desc: "Grand Prime Plus",
			brand: "256 GB - Gold Rose White",
			price_title: "Başlangıç Fiyatı",
			price: "₺99.999",
			status : 0
		},
		{
			id: 9,
			image: "/image/image.png",
			title: "Samsung",
			desc: "Grand Prime Plus",
			brand: "256 GB - Gold Rose White",
			price_title: "Başlangıç Fiyatı",
			price: "₺99.999",
			status : 0
		},
		{
			id: 10,
			image: "/image/image.png",
			title: "Samsung",
			desc: "Grand Prime Plus",
			brand: "256 GB - Gold Rose White",
			price_title: "Başlangıç Fiyatı",
			price: "₺99.999",
			status : 0
		},
		{
			id: 11,
			image: "/image/image.png",
			title: "Samsung",
			desc: "Grand Prime Plus",
			brand: "256 GB - Gold Rose White",
			price_title: "Başlangıç Fiyatı",
			price: "₺99.999",
			status : 0
		},
		{
			id: 12,
			image: "/image/image.png",
			title: "Samsung",
			desc: "Grand Prime Plus",
			brand: "256 GB - Gold Rose White",
			price_title: "Başlangıç Fiyatı",
			price: "₺99.999",
			status : 0
		},
		{
			id: 13,
			image: "/image/image.png",
			title: "Samsung",
			desc: "Grand Prime Plus",
			brand: "256 GB - Gold Rose White",
			price_title: "Başlangıç Fiyatı",
			price: "₺99.999",
			status : 0
		},
		{
			id: 14,
			image: "/image/image.png",
			title: "Samsung",
			desc: "Grand Prime Plus",
			brand: "256 GB - Gold Rose White",
			price_title: "Başlangıç Fiyatı",
			price: "₺99.999",
			status : 0
		},
		{
			id: 15,
			image: "/image/image.png",
			title: "Samsung",
			desc: "Grand Prime Plus",
			brand: "256 GB - Gold Rose White",
			price_title: "Başlangıç Fiyatı",
			price: "₺99.999",
			status : 0
		},

	];

    return (
		<>
			<div className={styles.grid}>
				{new_card.map((blog, index) => (
					<Card className={blog.status == 1 ? styles.pink_card : styles.blue_card} >
						{blog.status == 1 ? (
							<Button size="small"
									className={styles.pink_button}
									startIcon={<StarRateIcon sx={{color: "orangered"}}/>}>
								En İyi Fiyat
							</Button>
						) :
							<Button size="small"
									className={ styles.blue_button }
									startIcon={<StarRateIcon sx={{color: "#3B82F6"}}/>}>
								En İyi Fiyat
							</Button>
						}

						<CardMedia
							sx={{ height: 392, position: "relative"}}
							image={blog.image}
							title="green iguana"
						>
							{blog.status == 1 ? (
								<img
									src="/image/change.png"
									alt="get-mobil"
									loading="lazy"
									className={styles.mob_change}
								/>
							):""}


						</CardMedia>
						{blog.status == 1 ? (
								<Button size="small"
										className={styles.discount_button}
										startIcon={<ShoppingCartCheckoutIcon sx={{color: "#ffffff"}}/>}>
									%15 İndirim
								</Button>
							) :
							<Button size="small"
									className={ styles.blue_button }
									startIcon={<StarRateIcon sx={{color: "#3B82F6"}}/>}>
								En İyi Fiyat
							</Button>
						}

						<CardContent sx={{ bgcolor: "#ffffff" }}>
							<Typography gutterBottom variant="h5" component="div">
								{blog.title}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{blog.desc}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{blog.brand}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{blog.price_title+" " }<strong>{blog.price}</strong>
							</Typography>
						</CardContent>
					</Card>
				))}
			</div>
			<Grid container spacing={2} className={styles.img_footer}>
				<Grid item xs={4} className={styles.four}>
					<img
						src="/image/image-1.jpg"
						alt="get-mobil"
						loading="lazy"
					/>
				</Grid>
				<Grid item xs={7} className={styles.eight}>
					<img
						src="/image/image-2.jpg"
						alt="get-mobil"
						loading="lazy"
					/>
				</Grid>
			</Grid>
			<div className={styles.grid}>
				{new_card_two.map((blog, index) => (
					<Card className={blog.status == 1 ? styles.pink_card : styles.blue_card}>
						{blog.status == 1 ? (
								<Button size="small"
										className={styles.pink_button}
										startIcon={<StarRateIcon sx={{color: "orangered"}}/>}>
									En İyi Fiyat
								</Button>
							) :
							<Button size="small"
									className={ styles.blue_button }
									startIcon={<StarRateIcon sx={{color: "#3B82F6"}}/>}>
								En İyi Fiyat
							</Button>
						}
						<CardMedia
							sx={{ height: 392, position: "relative"}}
							image={blog.image}
							title="green iguana"
						>
							{blog.status == 1 ? (
								<img
									src="/image/change.png"
									alt="get-mobil"
									loading="lazy"
									className={styles.mob_change}
								/>
							):""}

						</CardMedia>
						{blog.status == 1 ? (
								<Button size="small"
										className={styles.discount_button}
										startIcon={<ShoppingCartCheckoutIcon sx={{color: "#ffffff"}}/>}>
									%15 İndirim
								</Button>
							) :
							<Button size="small"
									className={ styles.blue_button }
									startIcon={<StarRateIcon sx={{color: "#3B82F6"}}/>}>
								En İyi Fiyat
							</Button>
						}

						<CardContent sx={{ bgcolor: "#ffffff" }}>
							<Typography gutterBottom variant="h5" component="div">
								{blog.title}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{blog.desc}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{blog.brand}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{blog.price_title+" " }<strong>{blog.price}</strong>
							</Typography>
						</CardContent>
					</Card>
				))}
			</div>
		</>


    );
}