export const Pagination = ({ currentPage, count, rowsPerPage, total, setCurrentPage }) => {
    const first = currentPage === 1 ? 1 : rowsPerPage * (currentPage - 1) + 1
    const end = currentPage === total ? count : first + rowsPerPage

    return (
        <>
            <div className="pagination">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(1)}>
                    ⏮️ First
                </button>
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                    ⬅️ Previous
                </button>
                <button disabled={currentPage === total} onClick={() => setCurrentPage(currentPage + 1)}>
                    Next ➡️
                </button>
                <button disabled={currentPage === total} onClick={() => setCurrentPage(total)}>
                    Last ⏭️
                </button>
            </div>
            <p>
                Page {currentPage} of {total}
            </p>
            <p>
                Rows: {first === end ? end : `${first} - ${end}`} of {count}
            </p>
        </>
    ) 
}