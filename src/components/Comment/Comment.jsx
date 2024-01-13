import { Avatar, Flex, Text } from "@chakra-ui/react"

const Comment = ({createdAt, username,profilePic,text }) => {
  return (
   <Flex>
    <Avatar src={profilePic} name={username} size={"sm"}/>
    <Flex direction={"column"} >
      <Flex gap={2}>
        <Text fontWeight={"bold"} fontSize={12}> {username}</Text>
        <Text fontSize={12} color={"gray"}>{text}</Text>
        <Text fontSize={12} color={"gray"}>{createdAt}</Text>

      </Flex>

    </Flex>
   </Flex>
  )
}

export default Comment