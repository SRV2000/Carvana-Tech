import { Grid } from "@mui/material";
import MyCard from "./MyCards";
import { cardData } from "./CardData";
import './CardUI.css'

const CardsContainer = () => {
  return (
    <div className="card-main">
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MyCard
              image={card.image}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardsContainer;
