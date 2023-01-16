import { OrderButton } from "./StyledComponents";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function OrderRecap({ setNewOrder, setOrderSubmitted }) {
    return (
        <>
            <Box sx={{ margin: "0 20%" }}>
                <Typography variant="h2" sx={{ textAlign: "center" }}>Thank you for your order!</Typography>
            </Box>
        <>
            <Box sx={{ margin: "0 30%" }}>
                <OrderButton 
                    sx={{ marginTop: "5%", width: "100%", height: "100px" }}
                    onClick={() => {
                        setNewOrder(true)
                        setOrderSubmitted(false)
                    }}
                    >
                    <Typography
                        sx={{
                            fontWeight: "600",
                            color: "white"
                        }}
                        variant="h6"
                        gutterBottom={false}
                    >
                        Place Another Order
                    </Typography>
                </OrderButton>
            </Box>
        </>
        </>

    )
}