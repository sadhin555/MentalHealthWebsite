function result_reveal(){
            const showButton = document.getElementById('showButton');
            const hiddenParagraph = document.getElementById('hiddenParagraph');
                hiddenParagraph.style.display = 'block';
                hiddenParagraph.display = 'flex';
                window.print();
            }