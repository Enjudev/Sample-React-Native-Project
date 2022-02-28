import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"

const useBody = () => {
    const [button,setButton] = useState('Go to Home Screen')
    const navigation = useNavigation();

    return {
        navigation,
        button
    }
}

export default useBody;