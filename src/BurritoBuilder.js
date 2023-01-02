import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MainBody } from "./StyledComponents";
import Fillings from "./Fillings";
import { PRIMARY_BROWN, PRIMARY_GREY } from "./StyledComponents";
import { Hiding } from "./MediaQuery";

const burritoURL =
  "https://www.chipotle.com/content/dam/chipotle/global/menu/meal-types/cmg-10001-burrito/web-desktop/order.png";

export default function BurritoBuilder({ allIngredients }) {
  return (
    <MainBody>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          height: "400px"
        }}
        className="headerBox"
      >
        <Box
          className="burritoBox"
          sx={{
            width: "40%",
            height: "400px"
          }}
        >
          <img
            src={burritoURL}
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
          />
        </Box>
        <Box
          className="headerTextBox"
          sx={{
            width: "70%",
            height: "400px",
            padding: "80px 8px 60px 0",
            boxSizing: "border-box"
          }}
        >
          <Typography
            className="typeHeader"
            sx={{ fontWeight: "500", color: PRIMARY_GREY }}
            variant="h5"
            gutterBottom={false}
          >
            BUILD YOUR
          </Typography>
          <Typography
            sx={{ fontWeight: "500", padding: "5px 0", color: PRIMARY_BROWN }}
            variant="h3"
            gutterBottom={false}
          >
            BURRITO
          </Typography>
          <Typography
            sx={{ color: PRIMARY_BROWN }}
            variant="subtitle2"
            gutterBottom
          >
            Your choice of freshly grilled meat or sofritas wrapped in a warm
            flour tortilla with rice, beans, and topped with guac, salsa, sour
            cream, or cheese.
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: "20px 15%",
          boxSizing: "border-box"
        }}
      >
        <Fillings allIngredients={allIngredients} />
      </Box>
    </MainBody>
  );
}
