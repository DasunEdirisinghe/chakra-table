import {Tbody, Th, Thead, Tr, Table} from "@chakra-ui/react";
import React from 'react';
import TrComponent from "./tr.component";

const TableComponent = ({columns, data, onSelected}) => {

    function selectedRow(row) {
        onSelected(row)
    }

    return (<Table variant='simple'>
        <Thead>
            <Tr>
                {columns.map((item, index) => <Th key={index}>{item.header}</Th>)}
            </Tr>
        </Thead>
        <Tbody>
            {data.map((item, index) => <TrComponent onSelected={(selectedItem) => {
                selectedRow(selectedItem)
            }} key={index} columns={columns} item={item}/>)}
        </Tbody>
    </Table>)
}

export default TableComponent