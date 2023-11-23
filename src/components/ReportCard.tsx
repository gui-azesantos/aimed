import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

interface ReportCardProps {
  diagnosis: string;
  treatment: string;
}

export const ReportCard: React.FC<ReportCardProps> = ({
  diagnosis,
  treatment,
}: ReportCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Reporte</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Possíveis Diagnósticos
            </Heading>
            <Text pt="2" fontSize="sm">
              {diagnosis.split(/-\s*/)?.map((item) => (
                <Text>{item}</Text>
              ))}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Recomendações para Tratamento:
            </Heading>
            <Text pt="2" fontSize="sm">
              {treatment.split(/-\s/gi)?.map((item) => (
                <Text>{item}</Text>
              ))}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
