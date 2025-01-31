import css from './FrequentlyAskedQues.module.css';
import CollapsableCard2 from '../../../utils/Cards/CollapsableCard2/CollapsableCard2'

let FrequentlyAskedQues = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>Frequently asked questions</div>
            <div className={css.cards}>
                <CollapsableCard2 title="What will Tushar's Tomato charge me for creating a page on its platform?" content="Creating a restaurant page on Tushar's Tomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges." />
                <CollapsableCard2 title="What will Tushar's Tomato charge me for creating a page on its platform?" content="Creating a restaurant page on Tushar's Tomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges." />
                <CollapsableCard2 title="What will Tushar's Tomato charge me for creating a page on its platform?" content="Creating a restaurant page on Tushar's Tomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges." />
                <CollapsableCard2 title="What will Tushar's Tomato charge me for creating a page on its platform?" content="Creating a restaurant page on Tushar's Tomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges." />
            </div>
        </div>
    </div>
}

export default FrequentlyAskedQues;