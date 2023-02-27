import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "../styles/ProductionList.module.scss";
import {Chip} from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';

export default function MediaCard() {

    const new_card = [
	{
		id: 1,
		image: "/image/image.png",
		title: "Samsung",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		date: "12/12/2024 12:00",
	},
	{
		id: 2,
		image: "/image/image.png",
		title: "Samsung",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		date: "12/12/2024 12:00",
	},
	{
		id: 3,
		image: "/image/image.png",
		title: "Samsung",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		date: "12/12/2024 12:00",
	},
	{
		id: 4,
		image: "/image/image.png",
		title: "Samsung",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		date: "12/12/2024 12:00",
	},
	{
		id: 5,
		image: "/image/image.png",
		title: "Samsung",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		date: "12/12/2024 12:00",
	},
	{
		id: 6,
		image: "/image/image.png",
		title: "Samsung",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		date: "12/12/2024 12:00",
	},
	{
		id: 7,
		image: "/image/image.png",
		title: "Samsung",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		date: "12/12/2024 12:00",
	},
	{
		id: 8,
		image: "/image/image.png",
		title: "Samsung",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		date: "12/12/2024 12:00",
	},
];

    return (
		<div className={styles.grid}>
			{new_card.map((blog, index) => (
				<Card sx={{ maxWidth: 392, bgcolor: "#3B82F620" }}>
					<Chip size="small" label="En İyi Fiyat" sx={{ margin: "10px", bgcolor: "#3b82f647", color: "#3B82F6"}} icon={<StarRateIcon sx={{color: "#3B82F6"}}/> }/>
					<CardMedia
						sx={{ height: 392}}
						image={blog.image}
						title="green iguana"
					/>
					<CardContent sx={{ bgcolor: "#ffffff" }}>
						<Typography gutterBottom variant="h5" component="div">
							{blog.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lizards are a widespread group of squamate reptiles, with over 6,000
							species, ranging across all continents except Antarctica
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">Share</Button>
						<Button size="small">Learn More</Button>
					</CardActions>
				</Card>
			))}
		</div>

    );
}