import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { Supply } from "../models/Supply";

type CleaningSuppliesScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "CleaningSupplies">,
};

export function CleaningSuppliesScreen({ navigation }: CleaningSuppliesScreenProps) {
    const [supplies, setSupplies] = React.useState<Supply[]>([
        { id: 1, name: "All-purpose cleaner", quantity: 2, cost: 5.99 },
        { id: 2, name: "Microfiber cloths", quantity: 5, cost: 1.99 },
        { id: 3, name: "Vacuum bags", quantity: 3, cost: 3.99 },
    ]);

    return (
        <flexboxLayout style={styles.container}>
            <listView
                items={supplies}
                cellFactory={(supply) => {
                    return (
                        <gridLayout columns="*, auto" className="p-2 border-b border-gray-200">
                            <label col="0" className="font-bold">{supply.name}</label>
                            <stackLayout col="1">
                                <label className="text-sm text-gray-500">Qty: {supply.quantity}</label>
                                <label className="text-sm text-gray-500">Cost: ${supply.cost.toFixed(2)}</label>
                            </stackLayout>
                        </gridLayout>
                    );
                }}
            />
            <button
                className="bg-green-500 text-white p-2 rounded-lg mt-4"
                onTap={() => navigation.navigate("AddSupply")}
            >
                Add New Supply
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