import React from 'react'

export const JournalEntrie = () => {
    return (
        <div className='journal__entry pointer'>
            <div className="journal__entry-picture"
                style={{
                    backgroundImage:'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAACnCAMAAABzYfrWAAAAxlBMVEV+qLG0zNFAZoB2lqooQVYpTGckPlRFW2zh4eG60te3z9R5ma0oSmRph5tLZnkjPFIoRl0dOE8XNEx7pq9wkqeCrbVrkZyEm6Q9Ynvo5+YXQmBmipZJaHePp69qgo48VGapwcdZe4g2V2+Uq7NTa3pRcX+ctLt0ipWRtLwzTF9jeoesxMp+lZ8QP17S1tkwSV0zUWlPa39zm6Zad4ustLuSnqmpsrm9w8iUrLNKbYVBW29LZXpec4aFoLG4v8Ta3N6mt8KeqLGj5CMQAAAKEUlEQVR4nO2dC3PavBKGcTECG4LxDbATYkISCJdgQpqS5p7//6eOVgJjG4nQmeTwjbzvdDptAx30zO6rlYxWpRIKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCKa72crl0Sz7VsT/Jf1/L2GKKq9cXbReJyeS6bqnkX1s6F7Es246uKbFjf7D/mign/+amP51q5swh+lbEsvXmKQLbynV9CkozNa5JTGzHcWzLIhti8VkbeYFoVN1MtbRMbapN+8PO6CpynDUxYkXIqwSoTE0k0zQNQ7scVYnNjIzY49Njf9rjyW+fRaf+jSZmlTAzjGmnSWzCeBU1vnz3mtqSNdzPahNlw9GYWT+xrovo9/5pDOllH0QLIkzrRIyXFZ8WD9cZsyK7ehArDkzrjW14k3V27A///5W/HAMsi4wOi6wkwEaEvW+8LFB4+aesKrCv+oYMi4Si0b+ymXsVJxv9C5sFVseUVA7arDqTzJSm2eHhdVEQXHwZaEeSwDKNXmTTUqEniS+jHzHY18XAxfzdnkgCy+if8VLBOZPhNCd2Ubze57BmEhLT82RFTZxzSZFvzDgu5aPLv4aB2h0hLGpYMasRBr8GrL6IJfZldNj/onoy+hcssnoiWKZxGbH1zeIXaMFXOpdC+zJ6tvpWT0sHOkhHCAuKA8qKtLq/uLot+KukzDB6DuBSupBYWrI0NLVzB36YsAINWkDEORelI09Ga3nsIf2c3DERG7ypdVprw8qK21erI+DFrJ6M3WMP6qfEpkP7fAcWNawqN6zur7y63L6qAvsyoJBQdmL0T2F00e6o+1ewECLxLivGK5bZlxkBfUWty2X7B/0cLVMbWZYoCXPpaFmjfDqaffZGJXOR52EvO2K67IuFhiWyr7iXq//NnrK52LbYeidrWMOqIzEskX051WE2HdkayGofe2g/oAiwZPLQ6E/Yzk3rK1aMF6++Jhn7MvsAMTr20L5dzOKzxYPZ0Q9Iwnw66qN0OrIyQj2j92mpRXLzobNd5uxEUlcUb4u1faWqCZOGLBmrRgtCy8lYvDklRBdXDd372cPsXvCjbszsq7m1LxNWQLZijxl5aG3GaMJk2PvblZj737daEAS130KQwMuyJ8lejqFgcMGEmISWeTmudkShswbyJ6iBggfhS9b2dWmmgkutaRFqLRIl1kzXObZ8Iux+7qXF7cuqJslIg0utmstl26VJ8lTZVrLY31lwUVS19889sHQnebZmso1UhQp6vq3V1zK09tQO3b8ns5NfYlgsEVPoNa2v2kbXE02WKzNNK9aBWCzlJawgKKuYwWrdpifXK5rmT8ce4vdpqWdWiJQWaXpPrDSVbDxIGK5ZNSq3qe97sdWirs62IBRb8XZ8jFa9fsK+NiIpT0Va8PxtVCqVML0fMY3pAkoZ42IzYtPI0SrX6/csHQ9c+nDD0lsVEBmlU7EXq/S9GzrHp215TatcrntNQg5Lx24rxarS0p1Jaslpav1jD/H7tLSz39NKaFFeJxFPx/28uouNYW1okWp27+bYY/w+Qf1A0hsHW1qQjl/bV8qwZLSUSUR44poZXJoW8Lrbb18Zw5LQMm9UcXkweWsipQX29USkjzHYQ4wsK1FsqUMrZ/I7tPbYV96wpLT6ytAiuacXu7TK9fK9LnjyM8gblpTWVBVaJdgI7O+nBbzurJx9CQwrbEhoKTMpukArfTJFSIvZl5X62gh7bJFjtRhNGhJaqkyKUG452te0wL4WG/vq7lQNFNbLexBMQrVptaE4NQ+hBfa1rr52k7DSeHqHLcIC0NIPowXpeLc5ZZerGirh74DSGilOi5byJD6UFqTjkyWqGioDtv/83BDSMlWh9U+xxXjdk53Aoon4AqH1+1Zxl/8H31rrhKTsvRGGCa1gLqu3lKF12Jzo1T0hrfDp8/eA//Ht/W0hrbdUoXVQveWtavNXb5dW+Eyrhj/r6FqE0lpeGVqH1fLwDPF1l1aDVg21FTWrRtr0Fa7lv1onep63pvXu5WmFD2Dtf8JG4+Uu3EdLmXXiF3sQ3sd89ep5c3g6/ZGndcv++SVcvAXB+b7dQHX2IPbvb3nvteD91fuA4Fp5+UwEWKswXAW1jXuJaamzvyXfO2U5CM40pzZPcc3ztMJaEMwH4Qzy8TOshOtqQuG9U/Y4kYhova4+ypsc9OisSH/P0zqff9KKi73kPAwf5quBOLaUmRLhvArRBb5Fwwly8BJykEaV99rbcflK45ZG04K94jb8Q/NxJl4nHnuM3yiaih0RrflODgpqeVghQiI+h6NAugehjMmD3BvRyofmHsvB8jwIVvtoUZOfv4QVno/CVbU6tgXyNRGtJAcvPzKVap5WpdGlFdcze7XY5dWxLZArokVTkQJ4r6/nRimtBv81CZjVC2kpFVoldyiiVa7THJyXd5ShFQ6eGaHGUxBw19qlNVSLVsmX1PIfq1dvL63w4b3G9ksr4eTzJRRWp8psBW7kTrO0xl69nNSne2jdftKqYXXLMzLclBV6lpYyi8SN0rOiUaUFmNUsSzcEt7Qad2Dtb7dpy6+0st9pVqmQT5RKnEc44EP0exmv1Kr6rbapsdKs6PsfU6l97KF9v9ybFK7pBHrbWdGJGFd6nQgapOZHPXcWQ1Ot2ForU0QMmw7RCXnyRLxyexCzMBNYmXM+aoZWNrhYbx849ErInSAdU5m4ClJ52BKcITMNpVY9W2kZmeYI7MsS2Fe6gjgfhOkkzJ1PNIfns2MP62eUXSxq7OwrNDbYta80rUaaFbHyZ19j21HqjM9WbrYFbHKuGs4a1GW01qxaknPVtBYZH3tcPyQ/F1zsmGLM0vGuXt9Da2NYxTmzXxLkopb0g7Ba91te+VU1qxqK1Q+CKZ+L3L6ucvaVfbLPDatovUZAvoDWpo8NIc9r+0rTYoZlVx93WwWp3ccGJMpFLemRtFkMbWlxwypkjySQBNem/5YVQzpuaHHDKmr/LZCbb/uTDJ/blx2V65wWN6wC93YDuX3B4Fl48b6BVpPT4oZV5L6BXDJcvCel88IykVdYxe5JyUST0TBk/U5HM23IaWG/Uy532NSF1g28TLpUtr7opcs8qwi9dEH+GTRiljUA17S+ZWGf5kR+1drXA1wzO03sAb5VG/vL/4O2dxfIsEggFvHuAtD6Xoxx74sLalKsinovRim5c4U44452QIDBnSvj4t65wu7z4W33x6OhzO83rMzhKCryfT4luCsqWt8ARZqdqSGJMLwrKtHpmFHQLZtUR48aJWamn37BPWSPeA9ZIhpfvPEwzTHHia5GnWF/qk3xjjuJ/PZZvL0m0WL3JhK8P1Eq3z1t6nZy5DUvvJszL99tX0f2NpYSUHjvq1g+JXZxXW1ZW7XwTuF9YhdUu8vlEu+rRqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUMrrf6ptFyylAbHyAAAAAElFTkSuQmCC)',
                    backgroundSize:'cover'
 
                }}
            >

            </div>
            <div className='journal__entry-content'>

                <div className='journal__entry-body'>
                    <p className='journla__entry-title'>Un nuevo día</p>
                    <span className='journal__entry-text'> fdgjghj</span>
                </div>
                <div className='journal__entry-date-box'>
                    <span>Monday</span>
                    <h4>28</h4>
                </div>
            </div>
        </div>
    )
}
