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

export default function Toppings({ allIngredients, active, setActive, activePrice, setActivePrice }) {


  let toppingsArray = [];

  

  for (let i = 0; i < allIngredients.toppings.length; i++) {
    toppingsArray.push(Object.values(allIngredients.toppings[i]));
  }

  return toppingsArray.map((key) => {
    const isActive = active.includes(key[0]);
    const priceIsActive = activePrice.includes(key[1]);
    
    return (
      <Card
        key={key}
        onClick={() => {
          setActive(
            isActive
              ? active.filter(
                  (activeArrayElement) => activeArrayElement !== key[0]
                )
              : [...active, key[0]]
          );
          setActivePrice(
            priceIsActive
              ? activePrice.filter(
                  (activePriceArrayElement) =>
                    activePriceArrayElement !== key[1]
                )
              : [...activePrice, key[1]]
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
          {key[0]}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start"
          }}
        >
          {key[1] !== 0 ? (
            <Typography
              sx={{
                fontWeight: "600",
                color: PRIMARY_GREY
              }}
              variant="subtitle1"
              gutterBottom={false}
            >
              ${key[1].toFixed(2)}
            </Typography>
          ) : (
            ""
          )}
          <Typography
            sx={
              key[1] !== 0
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
            {key[2]} CAL
          </Typography>
        </Box>
      </Card>
    );
  });
}
