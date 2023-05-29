import React, { useState } from 'react'


const Pagination = ({pageHandler }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const PreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            pageHandler(currentPage - 1);
        }
    }

    const NextPage = () => {
        if (currentPage >= 1) {
            setCurrentPage(currentPage + 1);
            pageHandler(currentPage + 1);
        }
    }

    return (
        <div>
            <center>
                <button onClick={PreviousPage} disabled = {currentPage === 1}>previous</button>
            {/* <button onClick={() => {
                setCurrentPage(1)
                pageHandler(1)
            }} disabled = {currentPage === 1}>1</button>...
            {
                pageNumber.slice(currentPage - 2, currentPage + 1).map(p => (
                    <button key = {p} onClick={() => {
                        setCurrentPage(p)
                        pageHandler(p)}} disabled = {currentPage === p}>{p}</button>
                ))
            }... 
            <button onClick={() => {
                setCurrentPage()
            }}>{TotalPages}</button>  */}
            ...{currentPage}...
            {/* <button onClick={NextPage} disabled = {currentPage === TotalPages}> Next </button> */}
            <button onClick={NextPage} > Next </button>
            </center>
        </div>
    )
}

export default Pagination














// import React, { useState } from 'react'
// // import { GrPrevious, GrNext } from 'react-icons/gr';

// const Pagination = ({ data, pageHandler }) => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const TotalPages = data.length / 10;

//     const pageNumber = [];
//     for (let i = 1; i <= TotalPages; i++) {
//         pageNumber.push(i)
//     }

//     const PreviousPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//             pageHandler(currentPage - 1);
//         }
//     }

//     const NextPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage + 1);
//             pageHandler(currentPage + 1);
//         }
//     }

//     return (
//         <div>
//             <center>
//                 <button onClick={PreviousPage} disabled = {currentPage === 1}>previous</button>
//             <button onClick={() => {
//                 setCurrentPage(1)
//                 pageHandler(1)
//             }} disabled = {currentPage === 1}>1</button>...
//             {
//                 pageNumber.slice(currentPage - 2, currentPage + 1).map(p => (
//                     <button key = {p} onClick={() => {
//                         setCurrentPage(p)
//                         pageHandler(p)}} disabled = {currentPage === p}>{p}</button>
//                 ))
//             }...
//             <button onClick={() => {
//                 setCurrentPage()
//             }}>{TotalPages}</button> 
//              {/* Page {currentPage} of {TotalPages} */}
//             {/* <button onClick={NextPage} disabled = {currentPage === TotalPages}> Next </button> */}
//             <button onClick={NextPage} > Next </button>
//             </center>
//         </div>
//     )
// }

// export default Pagination
// above commented code pagantion - data get at a time