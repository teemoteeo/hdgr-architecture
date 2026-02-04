// ========== SHARED TYPING UTILITY ==========
const TypingUtil = {
  getHumanDelay() {
    const baseDelay = Math.floor(Math.random() * 81) + 40;
    return Math.random() < 0.1 ? Math.floor(Math.random() * 101) + 300 : baseDelay;
  },

  createCursor(parent) {
    const cursor = document.createElement('span');
    cursor.textContent = '█';
    cursor.style.color = '#ffffff';
    parent.appendChild(cursor);

    /*let visible = true;
    const interval = setInterval(() => {
      cursor.style.opacity = visible ? '1' : '0';
      visible = !visible;
    }, 400);*/

    return { cursor, interval:null };
  },

  typeText(element, text, onComplete, withCursor = true) {
    element.textContent = '';
    let charIndex = 0;
    let cursorData = null;

    if (withCursor) {
      cursorData = this.createCursor(element);
    }

    const typeChar = () => {
      if (charIndex < text.length) {
        const textNode = document.createTextNode(text[charIndex]);
        if (withCursor) {
          element.insertBefore(textNode, cursorData.cursor);
        } else {
          element.appendChild(textNode);
        }
        charIndex++;
        setTimeout(typeChar, this.getHumanDelay());
      } else {
        if (withCursor) {
          clearInterval(cursorData.interval);
          cursorData.cursor.remove();
        }
        if (onComplete) onComplete();
      }
    };

    typeChar();
  },

  deleteText(element, onComplete) {
    const cursor = element.querySelector('span');
    const textNodes = Array.from(element.childNodes).filter(n => n.nodeType === 3);
    let charIndex = textNodes.length - 1;

    const deleteChar = () => {
      if (charIndex >= 0) {
        textNodes[charIndex].remove();
        charIndex--;
        setTimeout(deleteChar, Math.floor(Math.random() * 31) + 20);
      } else {
        if (onComplete) onComplete();
      }
    };

    deleteChar();
  }
};

// ========== PROJECT NAMES TYPING ==========
(function() {
  const projectNames = document.querySelectorAll('.nav-list .project-name');

  function typeProjectName(element, text, startDelay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        TypingUtil.typeText(element, text, resolve, true);
      }, startDelay);
    });
  }

  async function typeAllProjects() {
    let initialDelay = 150;
    for (let i = 0; i < projectNames.length; i++) {
      const projectName = projectNames[i];
      const text = projectName.dataset.originalText || projectName.textContent;
      if (!projectName.dataset.originalText) {
        projectName.dataset.originalText = text;
      }
      await typeProjectName(projectName, text, initialDelay);
      initialDelay = 450;
    }
    await new Promise(resolve => setTimeout(resolve, 45000));
    typeAllProjects();
  }
  function startTyping() {
    if (document.querySelector('.container.visible')) {
      setTimeout(() => {
        if (projectNames.length > 0) typeAllProjects();
      }, 8000);
    } else {
      // Check again in 100ms
      setTimeout(startTyping, 100);
    }
  }

  startTyping();
})();


