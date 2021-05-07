import tabula

arquivo = tabula.read_pdf("componente_organizacional.pdf", pages="79-80-81-82-83-84-85")

tabula.convert_into("componente_organizacional.pdf", "tabelas.csv", output_format="csv", pages="all")