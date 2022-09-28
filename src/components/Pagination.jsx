import React from 'react'
// Máximo de itens na barra (números)
const MAX_ITEMS = 9
// Máximo de items a esqueda da página atual
const MAX_LEFT = (MAX_ITEMS - 1) / 2




const Pagination = ({ limit,
    total,
    offset,
    setOffset }) => {
    // Pega página atual
    const current = offset ? (offset / limit) + 1 : 1
    // Pega total de páginas
    const pages = Math.ceil(total / limit)
    // Pega primeira página
    const first = Math.max(current - MAX_LEFT, 1)

    function onPageChange(page) {
        setOffset((page - 1) * limit)
    }



    return (
        <ul className='pagination'>
            <li>
                <button
                    onClick={() => onPageChange(current - 1)}
                    disabled={current === 1}
                >Anterior</button>
            </li>
            {Array.from({ length: Math.min(MAX_ITEMS, pages) }).map((_, index) => index + first).map((page) => (
                <li key={page}>
                    <button
                        onClick={() => onPageChange(page)}
                        className={page === current ? 'pagination__item--active'
                            : null}>
                        {page}
                    </button>

                </li>
            ))}
            <li>
                <button
                    onClick={() => onPageChange(current + 1)}
                    disabled={current === pages}
                >Próximo</button>
            </li>
        </ul>
    )
}

export default Pagination