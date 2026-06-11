Java I/O Streams (Read and Write File)

import java.io.FileInputStream;
import java.io.FileOutputStream;

public class IOStreamDemo {
    public static void main(String[] args) {
        try {
            FileOutputStream fos = new FileOutputStream("sample.txt");
            String data = "Welcome to Java I/O Streams";
            fos.write(data.getBytes());
            fos.close();

            FileInputStream fis = new FileInputStream("sample.txt");
            int ch;

            while ((ch = fis.read()) != -1) {
                System.out.print((char) ch);
            }

            fis.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}


---

Java FileInputStream

import java.io.FileInputStream;

public class FileInputStreamDemo {
    public static void main(String[] args) {
        try {
            FileInputStream fis = new FileInputStream("sample.txt");

            int data;
            while ((data = fis.read()) != -1) {
                System.out.print((char) data);
            }

            fis.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}


---

Java FileOutputStream

import java.io.FileOutputStream;

public class FileOutputStreamDemo {
    public static void main(String[] args) {
        try {
            FileOutputStream fos = new FileOutputStream("sample.txt");

            String text = "Welcome to Java FileOutputStream";
            fos.write(text.getBytes());

            fos.close();

            System.out.println("Data written successfully");
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}


---

Java BufferedReader

import java.io.BufferedReader;
import java.io.FileReader;

public class BufferedReaderDemo {
    public static void main(String[] args) {
        try {
            BufferedReader br = new BufferedReader(new FileReader("sample.txt"));

            String line;

            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }

            br.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}


---

Java BufferedWriter

import java.io.BufferedWriter;
import java.io.FileWriter;

public class BufferedWriterDemo {
    public static void main(String[] args) {
        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter("sample.txt"));

            bw.write("Welcome to Java BufferedWriter");
            bw.newLine();
            bw.write("Buffered writing example");

            bw.close();

            System.out.println("Data written successfully");
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

---

Combined BufferedReader and BufferedWriter

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;

public class BufferedDemo {
    public static void main(String[] args) {
        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter("sample.txt"));
            bw.write("Java BufferedReader and BufferedWriter Example");
            bw.newLine();
            bw.write("File Handling in Java");
            bw.close();

            BufferedReader br = new BufferedReader(new FileReader("sample.txt"));

            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }

            br.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}