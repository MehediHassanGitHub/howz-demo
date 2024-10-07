import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type AddSupplyScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "AddSupply">,
};

export function AddSupplyScreen({ navigation }: AddSupplyScreenProps) {
    const [supplyName, setSupplyName] = React.useState("");
    const [quantity, setQuantity] = React.useState("");
    const [cost, setCost] = React.useState("");

    const handleAddSupply = () => {
        // Here you would typically add the supply to your data store
        console.log("Adding supply:", { supplyName, quantity: parseInt(quantity), cost: parseFloat(cost) });
        navigation.goBack();
    };

    return (
        <flexboxLayout style={styles.container}>
            <textField
                hint="Supply Name"
                text={supplyName}
                onTextChange={(args) => setSupplyName(args.value)}
                className="p-2 border rounded-lg mb-2"
            />
            <textField
                hint="Quantity"
                text={quantity}
                keyboardType="number"
                onTextChange={(args) => setQuantity(args.value)}
                className="p-2 border rounded-lg mb-2"
            />
            <textField
                hint="Cost per unit"
                text={cost}
                keyboardType="number"
                onTextChange={(args) => setCost(args.value)}
                className="p-2 border rounded-lg mb-2"
            />
            <button
                className="bg-green-500 text-white p-2 rounded-lg"
                onTap={handleAddSupply}
            >
                Add Supply
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        padding: 20,
    },
});