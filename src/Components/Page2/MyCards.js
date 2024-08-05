import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const MyCard = ({ image, title, description, buttonText }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        style={{ objectFit: "contain", height: "200px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Grid container justifyContent="center">
        <Button size="small">{buttonText}</Button>
      </Grid>
    </Card>
  );
};

export default MyCard;
