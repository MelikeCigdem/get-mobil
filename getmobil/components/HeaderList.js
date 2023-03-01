import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Breadcrumbs, Chip, Container, Grid, TextField} from "@mui/material";
import OnDeviceTrainingIcon from '@mui/icons-material/OnDeviceTraining';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import styles from "../styles/HeaderList.module.scss";
import Link from "next/link";
import AppleIcon from '@mui/icons-material/Apple';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import ThirtyFpsIcon from '@mui/icons-material/ThirtyFps';
import AndroidIcon from '@mui/icons-material/Android';
export default function ScrollableTabsButtonVisible() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    maxWidth: { xs: 320, sm: "100%" },
                    bgcolor: 'background.paper',
                    marginBottom: "45px"
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    aria-label="visible arrows tabs example"
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 0.3 },
                        },
                    }}
                >
                    <Tab label={<Chip size="small" sx={{bgcolor: "black", textTransform: "capitalize", color: "#fff"}}  icon={<AppleIcon sx={{color: "#fff !important"}}/>} label="Apple" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}} label="SAMSUNG" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  icon={<BakeryDiningIcon sx={{color: "black !important", fontSize: "25px !important"}}/>} label="Huawei" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  icon={<ThirtyFpsIcon sx={{color: "black !important"}}/>} label="Xioami" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  label="Redmi" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  label="POCO" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  icon={<AppleIcon sx={{color: "black !important"}}/>} label="IOS" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  icon={<AndroidIcon sx={{color: "black !important"}}/>} label="Android" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  label="İPhone 11 ve Modelleri" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}} label="SAMSUNG" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  icon={<BakeryDiningIcon sx={{color: "black !important", fontSize: "25px !important"}}/>} label="Huawei" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  icon={<ThirtyFpsIcon sx={{color: "black !important"}}/>} label="Xioami" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  label="Redmi" />} />
                </Tabs>
            </Box>
            <TextField sx={{borderRadius: "32px"}} className={styles.search_input} size="small" fullWidth label="Phone 12 Pro, Cihaz Ara..." id="fullWidth" />
            <Box className={styles.breadcrumbs}>
                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="#">
                        Anasayfa
                    </Link>
                    <Typography color="text.primary">Market</Typography>
                </Breadcrumbs>
            </Box>
            <Grid container spacing={2} className={styles.banner_comp_full}>
                <Grid item xs={6} className={styles.banner_one}>
                    <Container fixed>
                        <Grid container spacing={2} className={styles.banner_comp}>
                            <Grid item xs={6}>
                                <CardMedia
                                    sx={{ height: 392, position: "relative"}}
                                    image="/image/image.png"
                                    title="green iguana"
                                    className={styles.banner_comp_image}
                                >
                                   <img
                                        src="/image/change.png"
                                        alt="get-mobil"
                                        loading="lazy"
                                        className={styles.mob_change}
                                    />
                                </CardMedia>
                            </Grid>
                            <Grid item xs={6} className={styles.banner_desc}>
                                <CardContent sx={{ bgcolor: "#ffffff" }} className={styles.banner_desc_card}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Samsung
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Grand Prime Plus
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        256 GB - Gold Rose White
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Başlangıç Fiyatı : <strong>₺99.999</strong>
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Grid item xs={6} className={styles.banner_one}>
                    <Container fixed>
                        <Grid container spacing={2} className={styles.banner_comp}>
                            <Grid item xs={6}>
                                <CardMedia
                                    sx={{ height: 392, position: "relative"}}
                                    image="/image/image.png"
                                    title="green iguana"
                                    className={styles.banner_comp_image}
                                >
                                    <img
                                        src="/image/change.png"
                                        alt="get-mobil"
                                        loading="lazy"
                                        className={styles.mob_change}
                                    />
                                </CardMedia>
                            </Grid>
                            <Grid item xs={6} className={styles.banner_desc}>
                                <CardContent sx={{ bgcolor: "#ffffff" }} className={styles.banner_desc_card}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Samsung
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Grand Prime Plus
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        256 GB - Gold Rose White
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Başlangıç Fiyatı : <strong>₺99.999</strong>
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            <Box
                sx={{
                    flexGrow: 1,
                    maxWidth: { xs: 320, sm: "100%" },
                    bgcolor: 'background.paper',
                    margin: "50px 0px"
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    aria-label="visible arrows tabs example"
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 0.3 },
                        },
                    }}
                >
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  icon={<OnDeviceTrainingIcon sx={{color: "#a4bbe0 !important"}}/>} label="Tüm Telefonlar" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  icon={<FavoriteIcon sx={{color: "#fb8b9f !important"}}/>} label="En Çok Benilenler" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  icon={<StarIcon sx={{color: "#f9d200 !important"}}/>} label="Favoriler" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  icon={<EmojiEmotionsIcon sx={{color: "#a4bbe0 !important"}}/>} label="Çok Beğenilen" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  icon={<AccessTimeFilledIcon sx={{color: "#ffc0cbd1 !important"}}/>} label="İndirimli Ürünler" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  icon={<BookmarkAddedIcon sx={{color: "#a4bbe0 !important"}}/>} label="En Çok Kaydedilen" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  icon={<OnDeviceTrainingIcon sx={{color: "#a4bbe0 !important"}}/>} label="Tüm Telefonlar" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  icon={<FavoriteIcon sx={{color: "#fb8b9f !important"}}/>} label="En Çok Benilenler" />} />
                    <Tab label={<Chip size="small" sx={{bgcolor: "#e6effe", textTransform: "capitalize"}}  icon={<StarIcon sx={{color: "#f9d200 !important"}}/>} label="Favoriler" />} />
                </Tabs>
            </Box>
        </>

    );
}