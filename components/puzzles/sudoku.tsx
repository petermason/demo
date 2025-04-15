import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const initialPuzzle = {
    "difficulty": "medium",
    "puzzle": [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ]
};

const SudokuApp = () => {
    const [board, setBoard] = useState(initialPuzzle.puzzle);
    const [selectedCell, setSelectedCell] = useState(null);

    const renderCell = (value, rowIndex, colIndex) => {
        const isSelected = selectedCell?.row === rowIndex && selectedCell?.col === colIndex;
        
        return (
            <TouchableOpacity
                key={`${rowIndex}-${colIndex}`}
                style={[
                    styles.cell,
                    isSelected && styles.selectedCell,
                    (colIndex + 1) % 3 === 0 && styles.rightBorder,
                    (rowIndex + 1) % 3 === 0 && styles.bottomBorder
                ]}
                onPress={() => setSelectedCell({ row: rowIndex, col: colIndex })}
            >
                <Text style={styles.cellText}>{value !== 0 ? value : ''}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Sudoku - {initialPuzzle.difficulty}</Text>
            <View style={styles.board}>
                {board.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((cell, colIndex) => renderCell(cell, rowIndex, colIndex))}
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    board: {
        borderWidth: 2,
        borderColor: '#000',
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        width: 40,
        height: 40,
        borderWidth: 0.5,
        borderColor: '#999',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    selectedCell: {
        backgroundColor: '#e3f2fd',
    },
    rightBorder: {
        borderRightWidth: 2,
    },
    bottomBorder: {
        borderBottomWidth: 2,
    },
    cellText: {
        fontSize: 20,
    },
});

export default SudokuApp;


