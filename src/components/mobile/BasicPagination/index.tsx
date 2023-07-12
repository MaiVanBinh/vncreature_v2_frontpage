import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination() {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log("BasicPagination", value)
  }
  return (
    <Stack
      spacing={2}
      sx={{
        marginTop: "10px",
      }}
    >
      <Pagination count={10} onChange={handleChange}/>
    </Stack>
  );
}
