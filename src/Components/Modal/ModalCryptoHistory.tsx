import { modalAddOfferProps } from "@/Utils/typeComponent";
import React, { useEffect, useState } from "react";
import InputSubmit from "../Inputs/submit";
import { Box, Modal } from "@mui/material";
import { historyCrypto } from "@/Services/crypto/crypto";
import { historyCryptoProps } from "@/Utils/type";
import { BarChart, LineChart } from "@mui/x-charts";

const ModalCryptoHistory = ({
  maxValue,
  additionalCss,
  content,
  crypto,
}: modalAddOfferProps) => {
  const [open, setOpen] = useState(false);
  const [dataCrypto, setDataCrypto] = useState<historyCryptoProps[]>();
  const [axeX, setAxeX] = useState<string[]>([]);
  const [axeY, setAxeY] = useState<number[]>([]);
  const [prevValue, setPrevValue] = useState<string>("");
  const handleOpen = () => {
    setOpen(true);
    getHistoryCrypto();
  };
  function handleClose() {
    setOpen(false);
  }
  async function getHistoryCrypto() {
    setPrevValue("");
    const response = await historyCrypto(crypto.id);
    setDataCrypto(response);
    await response.forEach((Element: historyCryptoProps) => {
      if (
        new Date(prevValue).toLocaleString() !==
        new Date(Element.created_at).toLocaleString()
      ) {
        setPrevValue(Element.created_at);
        axeX.push(new Date(Element.created_at).toLocaleString());
        axeY.push(Number(Element.value.toFixed(2)));
      }
    });
  }
  const style = {
    position: "absolute" as "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "rgb(212 212 212);",
    border: "2px solid #F97316",
    borderRadius: 20,
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <InputSubmit
        content={content}
        onClick={handleOpen}
        additionalCss="text-white"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex flex-col items-center gap-4">
          <div>
            {dataCrypto && (
              <BarChart
                xAxis={[{ data: axeX, scaleType: "band", reverse: true }]}
                series={[
                  {
                    data: axeY,
                  },
                ]}
                width={280}
                height={320}
              />
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalCryptoHistory;
