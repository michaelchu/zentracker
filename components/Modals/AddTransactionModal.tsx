import React, { useState, useEffect } from "react";
import { Modal, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import TabInputs from "./TabInputs";

const AddTransactionModal = ({
  show,
  accounts,
  isOption,
  handleClose,
  handleCloseAndAdd,
}) => {
  const [activeTab, setActiveTab] = useState("stocks");
  const [transaction, setTransaction] = useState({ object: {} });

  return (
    <Modal show={show} onHide={handleClose} size={"sm"} centered>
      <Modal.Header>
        <Modal.Title>
          Add {isOption ? "Option" : "Stock"} Transaction
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TabInputs
          transaction={transaction}
          accounts={accounts}
          handleChange={setTransaction}
          isOption={isOption}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" variant="outline-secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleCloseAndAdd(transaction);
          }}
          type="button"
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTransactionModal;
