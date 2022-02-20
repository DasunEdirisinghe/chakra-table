import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import TableComponent from "./components/table/table.component";

export const App = () => {

  const COLUMN = [
    {
      header: "Customer ID",
      accessor: "customer_id",
    },
    {
      header: "Customer Name",
      accessor: "customer_name"
    },
    {
      header: "Contact Name",
      accessor: "contact_name"
    },
    {
      header: "Points",
      accessor: "points",
      condition: {
        Approved : "green",
        Pending : "red",
        100: "green"
      }
    },
    {
      header: "Actions",
      options: [
        {
          label: "Profile",
          action: function(line: any) {
          }
        },
        {
          label: "Payments",
          action: function(line: any) {
            console.log(line)
          }
        },
        {
          label: "Block",
          action: function(line: any) {
            console.log(line)
          }
        },
      ]
    }
  ]

  const data = [
    {
      customer_id: 1,
      customer_name: "Liam",
      contact_name: "Olivia",
      points: "Approved"
    },
    {
      customer_id: 2,
      customer_name: "Elijah",
      contact_name: "Emma",
      points: "Pending"
    },
    {
      customer_id: 3,
      customer_name: "Noah",
      contact_name: "Ava",
      points: 50
    },
    {
      customer_id: 4,
      customer_name: "Oliver",
      contact_name: "Charlotte",
      points: 60
    },
  ]


  return (
      <ChakraProvider theme={theme}>
        <Box w={"100%"} h={"100vh"} bg={"blackAlpha.200"} d={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box w={800} bg={"white"} p={5} borderRadius={5}>
            <TableComponent onSelected={(x: any) => {
              console.log(x, "APP")}} columns={COLUMN} data={data}/>
          </Box>
        </Box>
      </ChakraProvider>
  )
}
