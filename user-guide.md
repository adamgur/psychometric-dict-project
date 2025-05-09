# מדריך למשתמש - מילון למידה לפסיכומטרי

## פתיחה

ברוכים הבאים לאפליקציית "מילון למידה לפסיכומטרי". מדריך זה יסביר בפירוט כיצד להשתמש באפליקציה כדי להתכונן למבחן הפסיכומטרי באופן יעיל ואפקטיבי.

האפליקציה מיועדת לעזור לך ללמוד ולשנן מילים בעברית ובאנגלית שמופיעות בחלק המילולי של מבחן הפסיכומטרי. אחד היתרונות הגדולים של האפליקציה הוא שהיא פועלת באופן מקומי בדפדפן שלך, ללא צורך בהתקנה מיוחדת, שרת או חיבור לאינטרנט (לאחר הטעינה הראשונית).

## הפעלת האפליקציה

### דרישות מערכת
- דפדפן אינטרנט מודרני (כגון Chrome, Firefox, Edge, Safari)
- אין צורך בהתקנה של תוכנות נוספות

### צעדים להפעלה
1. התקן את התלויות:
   ```bash
   pip install fastapi uvicorn
   ```
2. הפעל את השרת באמצעות:
   ```bash
   python server.py
   ```
3. פתח את הדפדפן וגש לכתובת:
   - לאפליקציית עברית: [http://127.0.0.1:8001/hebrew](http://127.0.0.1:8001/hebrew)
   - לאפליקציית אנגלית: [http://127.0.0.1:8001/english](http://127.0.0.1:8001/english)

## ממשק המשתמש

### המסך הראשי

במסך הראשי תוכל לראות:

1. **סרגל כלים עליון** - כולל:
   - שדה חיפוש
   - תיבת בחירה לסינון מילים
   - כפתורי פעולה (הוספת מילה, מצב למידה אקראי, איפוס נתונים)
   - כפתורי גיבוי וייבוא

2. **אזור סטטיסטיקה** - מציג נתונים על:
   - סך כל המילים במאגר
   - מספר המילים שלמדת (✓)
   - מספר המילים שעליך לחזור (X)
   - מספר המילים שאינך בטוח לגביהן (?)

3. **רשימת המילים** - מציגה את המילים בפורמט של כרטיסיות, כאשר כל כרטיסייה כוללת:
   - את המילה
   - פירוש קצר
   - משפט לדוגמה
   - סימון סטטוס הלמידה (✓, X, ? או ללא סימון)

**שים לב:** כל שינוי שתבצע (הוספה, עריכה, מחיקה, סימון) נשמר אוטומטית ב-Local Storage של הדפדפן שלך. אין צורך לערוך קבצים ידנית.

## תהליכי העבודה העיקריים

### חיפוש וסינון

1. **חיפוש מילה**:
   - הקלד את המילה או חלק ממנה בשדה החיפוש
   - הרשימה תתעדכן באופן מיידי ותציג רק את המילים המתאימות

2. **סינון לפי סטטוס**:
   - בחר באפשרות המתאימה בתיבת הבחירה:
     - "כל המילים" - להצגת כל המילים
     - "מילים שלמדתי ✓" - להצגת המילים שכבר למדת
     - "מילים שטעיתי בהן X" - להצגת המילים שעליך לחזור
     - "מילים לא בטוח ?" - להצגת המילים שאינך בטוח לגביהן
     - "מילים שטרם סימנתי" - להצגת מילים חדשות שטרם סימנת

### סימון מילים

כדי לסמן מילה, לחץ על כרטיס המילה. תיפתח תצוגה מורחבת של המילה עם אפשרויות הסימון:

1. **✓ יודע** - לחץ כאשר אתה בטוח שאתה יודע את המילה
2. **X לא יודע** - לחץ כאשר אינך יודע את המילה ותרצה לחזור עליה
3. **? לא בטוח** - לחץ כאשר אינך בטוח לגבי המשמעות המדויקת
4. **מחק מילה** - לחץ כדי למחוק את המילה מהמאגר

### מצב למידה אקראי (Flashcards) עם בחירת רמות

הגרסה החדשה של האפליקציה מאפשרת בחירת רמות למידה מותאמות אישית:

1. לחץ על כפתור "מצב למידה אקראי"
2. בחלון ההגדרות שנפתח, בחר אילו סוגי מילים ברצונך לכלול:
   - **מילים שאינני יודע (X)** - מילים שסימנת שאינך יודע
   - **מילים שאני לא בטוח לגביהן (?)** - מילים שסימנת כלא בטוח
   - **מילים שאני יודע (✓)** - מילים שכבר למדת
   - **מילים שטרם סימנתי** - מילים חדשות ללא סימון
3. לחץ על "התחל למידה" כדי להתחיל במצב למידה אקראי עם המילים מהרמות שבחרת
4. תוצג מילה אקראית מבין המילים מהרמות שנבחרו
5. נסה להיזכר במשמעות של המילה
6. לחץ על הכרטיס כדי לראות את המשמעות והדוגמה
7. סמן את המילה בהתאם לידע שלך:
   - **✓ ידעתי** - אם ידעת את המשמעות
   - **X לא ידעתי** - אם לא ידעת את המשמעות
   - **? לא בטוח** - אם לא היית בטוח
8. המערכת תעבור אוטומטית למילה אקראית הבאה
9. בכל שלב תוכל לצאת ממצב הלמידה האקראי באמצעות כפתור "סגור"

### הוספת מילים חדשות ועריכת מילים קיימות

1. לחץ על כפתור "הוסף מילה חדשה" כדי להוסיף מילה.
2. מלא את הפרטים הבאים:
   - **מילה** - המילה החדשה
   - **פירוש** - המשמעות של המילה
   - **משפט לדוגמה** - משפט שמדגים את השימוש במילה
3. לחץ על "שמור מילה"
4. לעריכת מילה קיימת, לחץ על כרטיס המילה ובחר "ערוך" או שנה את הפרטים ושמור.
5. למחיקת מילה, לחץ על "מחק מילה" בכרטיס הרלוונטי.

**כל השינויים נשמרים אוטומטית בדפדפן שלך.**

### גיבוי ושחזור נתונים

#### ייצוא נתונים (גיבוי)
1. לחץ על כפתור "ייצא נתונים"
2. קובץ JSON יורד אוטומטית למחשב שלך
3. שמור את הקובץ במקום בטוח

#### ייבוא נתונים (שחזור)
1. לחץ על כפתור "ייבא נתונים"
2. בחר את קובץ ה-JSON שיצרת קודם לכן
3. אשר את הייבוא כאשר תתבקש

**שים לב**: ייבוא נתונים יחליף את כל הנתונים הנוכחיים באפליקציה. מומלץ לייצא את הנתונים הנוכחיים לפני ייבוא נתונים חדשים.

### איפוס האפליקציה

1. לחץ על כפתור "אפס נתונים"
2. אשר שברצונך לאפס את הנתונים כאשר תתבקש

**שים לב**: פעולה זו תאפס את המאגר למצב ההתחלתי, תמחק מילים מותאמות אישית ותאפס את כל הסימונים. לא ניתן לבטל פעולה זו.

## טיפים לשימוש יעיל

1. **התאמת רמות הלמידה** - השתמש באפשרות הלמידה לפי רמות כדי להתמקד במילים שאתה רוצה לשפר. למשל, בתחילת הלמידה כדאי לסמן את כל המילים ואז להתמקד ב-"מילים שאינני יודע (X)" ו-"מילים שאני לא בטוח לגביהן (?)".

2. **למידה הדרגתית** - התחל עם קבוצה קטנה של מילים וסמן אותן לפי רמת הידע שלך. לאחר מכן, התמקד במילים שסימנת ב-X או ב-?.

3. **חזרות תדירות** - השתמש במצב הלמידה האקראי מדי יום, תוך התמקדות במילים שסימנת כ"לא ידעתי" (X).

4. **הוסף הקשר** - כאשר אתה מוסיף מילים חדשות, כתוב משפט דוגמה שמתקשר לחיים שלך או לנושא שמעניין אותך.

5. **גיבוי קבוע** - גבה את הנתונים שלך מדי פעם כדי למנוע אובדן מידע.

6. **סינון חכם** - השתמש בסינון כדי להתמקד בקבוצות מילים ספציפיות בכל פעם.

7. **למידה לפי רמות שונות** - שנה את הגדרות הלמידה האקראית מעת לעת. לדוגמה:
   - בהתחלה - למד את כל המילים שטרם סימנת
   - בשלב הביניים - התמקד במילים שסימנת כ-"לא יודע" ו-"לא בטוח"
   - לפני המבחן - ערוך חזרה על כל המילים, כולל אלה שאתה כבר יודע

## פתרון בעיות

### האפליקציה לא נפתחת
- ודא שאתה משתמש בדפדפן מודרני
- נסה לפתוח את הקובץ בדפדפן אחר

### הנתונים נעלמו
- ייתכן שה-localStorage של הדפדפן נוקה
- השתמש בקובץ הגיבוי האחרון שלך כדי לשחזר את הנתונים

### האפליקציה איטית
- אם יש לך מספר גדול מאוד של מילים, ייתכן שהאפליקציה תהיה איטית יותר
- נסה לייצא את הנתונים, לאפס את האפליקציה ואז לייבא את הנתונים חזרה

### בעיות במצב למידה אקראי לפי רמות
- אם אין מילים שמוצגות במצב למידה אקראי, ודא שבחרת לפחות סוג אחד של מילים
- אם אתה לא רואה מילים מסוג מסוים, ודא שיש לך מילים מסומנות באותו סוג

## סיכום

אפליקציית "מילון למידה לפסיכומטרי" מספקת דרך פשוטה ויעילה לשנן אוצר מילים בעברית ובאנגלית. הגרסה החדשה עם מצב למידה אקראי לפי רמות מאפשרת לך להתאים את חווית הלמידה באופן אישי. השתמש באפליקציה באופן עקבי כדי לשפר את הידע שלך במילים שמופיעות במבחן הפסיכומטרי.

בהצלחה בלימודיך!