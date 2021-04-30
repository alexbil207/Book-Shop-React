
export function BookFilter() {
    return <div className='filters'>
        <input type="text" placeholder="Search Book By Name" />
        <label htmlFor="price">Price:
                <select id="price">
                <option key="all"></option>
                <option key="20">$20 - 0</option>
                <option key="50">$50 - $20</option>
                <option key="100">$100-$50</option>
                <option key="+100">+$100</option>
            </select>
        </label>
    </div>

}