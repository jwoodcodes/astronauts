import { getDataFromMongoDB } from 'backend/getData';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import React, { useState, useEffect } from 'react';

export function GridComponent() {
    const [rowData, setRowData] = useState([]);
    const [columnDefs, setColumnDefs] = useState([]);

    useEffect(() => {
        // Fetch data when component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await getDataFromMongoDB();
            if (data && data.length > 0) {
                // Automatically generate columns from first data item
                const columns = Object.keys(data[0]).map(key => ({
                    field: key,
                    sortable: true,
                    filter: true
                }));
                setColumnDefs(columns);
                setRowData(data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const defaultColDef = {
        flex: 1,
        minWidth: 100,
        resizable: true
    };

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                pagination={true}
                paginationPageSize={10}
            />
        </div>
    );
}