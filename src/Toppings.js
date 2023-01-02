import { AllOut } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {
  PRIMARY_BROWN,
  PRIMARY_GREY,
  Card,
  OrderButton
} from "./StyledComponents";

const ALT_STYLES = {
  border: "1px solid blue",
  color: PRIMARY_BROWN,
  backgroundColor: "rgb(187, 222, 251, 0.1)"
};

export default function Toppings({ allIngredients }) {
  // const [selectedTopping, setSelectedTopping] = useState();
  // const [selectedButton, setSelectedButton] = useState();
  // const [selectedToppingsArray, setSelectedToppingsArray] = useState([]);
  // const [buttonClicked, setButtonClicked] = useState(false);
  const [active, setActive] = useState([]);
  let toppingNames = [];

  for (let i = 0; i < allIngredients.toppings.length; i++) {
    toppingNames.push(allIngredients.toppings[i].name);
  }

  // function clickHandler(name, i) {
  //   setSelectedTopping(name);
  //   console.log(selectedTopping);
  //   setSelectedButton(i);
  //   console.log(selectedButton);
  // }

  // function setToClicked(i) {
  //   if (selectedButton === i) {
  //     setButtonClicked(true);
  //     console.log(buttonClicked);
  //   }
  // }

  return toppingNames.map((key) => {
    const isActive = active.includes(key);

    return (
      <Card
        key={key}
        onClick={() =>
          setActive(
            isActive
              ? active.filter((current) => current !== key)
              : [...active, key]
          )
        }
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
          {key}
        </Typography>
      </Card>
    );
  });
}
// return (
//   <Box sx={{ height: "100vh" }}>
//     <Typography
//       sx={{
//         fontWeight: "600",
//         color: PRIMARY_BROWN,
//         padding: "30px 0"
//       }}
//       variant="h5"
//       gutterBottom={false}
//     >
//       Toppings
//     </Typography>
//     {toppingNames.map((name, i) => (
//       <button
//         key={key}
//         onClick={() => {
//           clickHandler(name, i);
//           // setToClicked(i);
//           ActiveButtons({ key });
//         }}
//         // style={buttonClicked ? { color: "green" } : {}}
//       >
//         {name}
//       </button>
//     ))}
//     {allIngredients.toppings.map((topping, i) => (
//       <Card
//         key={i}
//         variant="outlined"
//         onClick={() => {
//           setSelectedTopping({ topping });
//         }}
//         sx={topping === selectedTopping ? ALT_STYLES : {}}
//       >
//         <Typography
//           sx={{
//             fontWeight: "600",
//             color: PRIMARY_BROWN
//           }}
//           variant="h6"
//           gutterBottom={false}
//         >
//           {topping.name}
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "flex-start"
//           }}
//         >
//           <Typography
//             sx={{
//               fontWeight: "600",
//               color: PRIMARY_GREY
//             }}
//             variant="subtitle1"
//             gutterBottom={false}
//           ></Typography>
//           <Typography
//             sx={{
//               fontWeight: "600",
//               color: PRIMARY_GREY
//             }}
//             variant="subtitle1"
//             gutterBottom={false}
//           >
//             {topping.calories} CAL
//           </Typography>
//         </Box>
//       </Card>
//     ))}
//   </Box>
// );
