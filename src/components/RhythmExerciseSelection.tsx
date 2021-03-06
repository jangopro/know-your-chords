export default function Rhythm() {
    function rhythmExerciseValidation() {
        const rhythm = document.querySelector('#rhythm-selector') as HTMLInputElement;
        localStorage['rhythm'] = rhythm.value;
        return true;
    }
    return (
        <div>
            <h2>Rhythm Exercise</h2>
            <form action="rhythm-exercise" onSubmit={rhythmExerciseValidation} method="get">
                <select id="rhythm-selector">
                    <option value="rust-1">Rust 1</option>
                    <option value="rust-2">Rust 2</option>
                    <option value="rust-4">Rust 4</option>
                    <option value="rust-8">Rust 8</option>
                    <option value="rust-9">Rust 9</option>
                    <option value="rust-16">Rust 16</option>
                    <option value="shuffle">Shuffle</option>
                    <option value="triplets">Triplets</option>
                </select>
                <button type="submit">Rhythm Exercise</button>
            </form>
        </div>
    );
}
