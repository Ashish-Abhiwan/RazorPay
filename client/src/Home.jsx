import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from 'axios'

const Home = () => {
  const checkouthandler = async (amount) => {

    const {data : {key}} = await axios.get("https://payment-opzw.onrender.com/api/getkey")
    const {data : {order}} = await axios.post("https://payment-opzw.onrender.com/api/checkout", {
        amount
    })
    // console.log(data)

    const options = {
        key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "ASHISH KUMAR",
        description: "Test Transaction",
        image: "https://cdn.dribbble.com/users/3293507/screenshots/14667603/media/d8cbe035a61f64afdf6deabca5182842.jpg?compress=1&resize=400x300&vertical=center",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "https://payment-opzw.onrender.com/api/paymentverification",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9000090000"
        },
        notes: {
            address: "Razorpay Corporate Office"
        },
        theme: {
            color: "#3399cc"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };
  return (
    <Box>
      <Stack direction={["column", "row"]} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Card
          amount={5000}
          img={
            "https://img.lovepik.com/free-png/20210926/lovepik-black-and-red-headphone-wireless-headset-png-image_401422578_wh1200.png"
          }
          checkouthandler={checkouthandler}
        />
        <Card
          amount={8000}
          img={
            "https://flyclipart.com/thumb2/headphone-png-854118.png"
          }
          checkouthandler={checkouthandler}
        />
      </Stack>
    </Box>
  );
};

export default Home;
