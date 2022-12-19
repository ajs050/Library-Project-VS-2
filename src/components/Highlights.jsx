import React from 'react'
import Highlight from './UI/Highlight.jsx'

export default function Highlights() {
    return (
        <section id='#highlights'>
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library?</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight
                        paragraph="Get access to the book you purchased online instantly."
                        title="Easy and Quick"
                        logo='bolt'
                        />
                        <Highlight
                        paragraph="Library has books in all your favorite categories."
                        title="10,000+ Books"
                        logo='book-open'
                        />
                        <Highlight
                        paragraph="Get your hands on popular books for as little as $10."
                        title="Affortable"
                        logo='tags'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
