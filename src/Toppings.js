import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  PRIMARY_BROWN,
  PRIMARY_GREY,
  Card
} from "./StyledComponents";

const ALT_STYLES = {
  border: "1px solid blue",
  color: PRIMARY_BROWN,
  backgroundColor: "rgb(187, 222, 251, 0.1)"
};

export default function Toppings({ allIngredients, active, setActive, activePrice, setActivePrice, toppingIngredients }) {

  let toppingsArray = [];

  

  for (let i = 0; i < toppingIngredients.length; i++) {
    toppingsArray.push(Object.values(toppingIngredients[i]));
  }

  return toppingsArray.map((key) => {
    const isActive = active.includes(key[1]);
    const priceIsActive = activePrice.includes(key[2]);
    
    return (
      <Card
        key={key}
        onClick={() => {
          setActive(
            isActive
              ? active.filter(
                  (activeArrayElement) => activeArrayElement !== key[1]
                )
              : [...active, key[1]]
          );
          setActivePrice(
            priceIsActive
              ? activePrice.filter(
                  (activePriceArrayElement) =>
                    activePriceArrayElement !== key[2]
                )
              : [...activePrice, key[2]]
          );
        }} 
        sx={isActive ? ALT_STYLES : {}}
      >
        <Typography
          sx={{
            fontWeight: "600",
            color: PRIMARY_BROWN
          }}
          variant="h6"
          gutterBottom={false}
        >
          {key[1]}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start"
          }}
        >
          {key[2] !== 1 ? (
            <Typography
              sx={{
                fontWeight: "600",
                color: PRIMARY_GREY
              }}
              variant="subtitle1"
              gutterBottom={false}
            >
              ${key[2].toFixed(2)}
            </Typography>
          ) : (
            ""
          )}
          <Typography
            sx={
              key[2] !== 1
                ? {
                    fontWeight: "600",
                    color: PRIMARY_GREY,
                    paddingLeft: "40px"
                  }
                : {
                    fontWeight: "600",
                    color: PRIMARY_GREY,
                    paddingLeft: "0px"
                  }
            }
            variant="subtitle1"
            gutterBottom={false}
          >
            {key[3]} CAL
          </Typography>
        </Box>
      </Card>
    );
  });
}
