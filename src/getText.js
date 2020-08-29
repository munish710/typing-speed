export default () => {
    const texts = [
        "That one wants nothing to be different, not forward, not backwards, not in all eternity. Not merely bear what is necessary, still less conceal it… but love it. Friedrich Nietzsche",
        "A Stoic is someone who transforms fear into prudence, pain into transformation, mistakes into initiation, and desire into undertaking. Nassim Nicholas Taleb",
        "Stoicism teaches how to keep a calm and rational mind no matter what happens to you and it helps you understand and focus on what you can control and not worry about and accept what you can't control. Jonas Salzgeber",
        "Stoicism, understood properly, is a cure for a disease. The disease in question is the anxiety, grief, fear, and various other negative emotions that plague humans and prevent them from experiencing a joyful existence. William B. Irvine",
        "Everything can be taken from a man but one thing: the last of the human freedoms – to choose one’s attitude in any given set of circumstances, to choose one’s own way. Viktor Frankl",
        "There are two of the most immediately useful thoughts you will dip into. First that things cannot touch the mind: they are external and inert; anxieties can only come from your internal judgement. Second, that all these things you see will change almost as you look at them, and then will be no more. Constantly bring to mind all that you yourself have already seen changed. The universe is change: life is judgement. Marcus Aurelius",
        "How do you move forward? One step at a time. How do you lose weight? One kilo at a time. How do you write a book? One page at a time. How do you build a relationship? One day at a time. In a world obsessed with speed, never forget things of real worth and value take time. Thibaut",
        "Give yourself fully to your endeavors. Decide to construct your character through excellent actions and determine to pay the price of a worthy goal. The trials you encounter will introduce you to your strengths. Epictetus"
    ]
    return texts[Math.floor(Math.random() * texts.length)]
}