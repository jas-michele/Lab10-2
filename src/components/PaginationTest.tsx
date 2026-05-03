import { usePagination } from "../hooks/usePaginantion";

export default function PaginationTest() {
    const items = Array.from({ length: 23 }, (_, i) => `Item ${i + 1}`);

    const {
        currentPage,
        totalPages,
        startIndex,
        endIndex,
        nextPage,
        prevPage,
        canNextPage,
        canPrevPage,
    } = usePagination(items.length, 5);

    const currentItems = items.slice(startIndex, endIndex);

    return (
        <div>
            <h2>Pagination Demo</h2>

            <p>
                Page {currentPage} of {totalPages}
            </p>

            <ul>
                {currentItems.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <button onClick={prevPage} disabled={!canPrevPage}>
                Prev
            </button>

            <button onClick={nextPage} disabled={!canNextPage}>
                Next
            </button>
        </div>
    )


}