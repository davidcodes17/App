import {
  AlertDialog,
  useDisclosure,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Box,
  Text,
  useToast,
  Input,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";

const DeleteEmployee = () => {
  const url = "http://localhost:8080/api/user/";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [ID, setID] = useState({
    id: "",
  });
  const deleteEmp = () => {
    fetch(`${url}${ID.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => location.replace("/dashboard"));
  };
  const toast = useToast();
  return (
    <Box mt={4}>
      <Text fontWeight={500} fontSize={30}>
        Delete Employee
      </Text>

      <Text py={2}>Please Enter Employee ID</Text>
      <Input
        my={2}
        bg={"white"}
        type="number"
        placeholder="321"
        onChange={(e) => {
          setID({ ...ID, id: e.target.value });
        }}
        value={ID.id}
      />

      <Box mt={2}>
        <Button onClick={onOpen} bg={"darkorchid"} color={"white"} isTruncated>
          Delete Employee
        </Button>
        <AlertDialog
          motionPreset="slidelnBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader>Delete Employee?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Are you sure you want to Delete Employee {ID.id}
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button
                bg="darkorchid"
                color={"white"}
                onClick={() => {
                  deleteEmp();
                  toast({
                    title: `Employee with ID ${ID.id} has successfully being deleted`,
                    status: "success",
                    isClosable: true,
                    colorScheme: "pink",
                  });
                  onClose()
                }}
                ml={3}
              >
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Box>
    </Box>
  );
};

export default DeleteEmployee;
